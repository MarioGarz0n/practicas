import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv, createHash, hash, pbkdf2Sync, randomBytes, scrypt } from 'crypto';
import { concatAll } from 'rxjs';
import { promisify } from 'util';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  /*
  * Se sustituye el dato pasado por una cadena de caracteres aleatorios.
  * Variación de la adición de ruido.
  * 
  * Caso de uso: Se quiere saber que alguien ha pasado por la carretera a las 9:00, pero no es necesario saber quien.
  *              "Jorge ha pasado a las 9:00 por Ifeza" y tras anonimizar "tRx2a ha pasado a las 9:00 por Ifeza"
  */
  anonimizar_dato(dato:string): string{
    let dato_anom="";
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|<>?'; //conjunto de caracteres disponibles
    let random: string;

    for(let i=0; i<dato.length; i++){
      random=caracteres.charAt(Math.floor(Math.random() * caracteres.length)); //se genera un caracter aleatorio del conjunto
      dato_anom=dato_anom+random;
    }

    return dato_anom;
  }

  /*
  *  Otra forma de anonimizar un dato utilizando un algoritmo de hash
  */
  anonimizar_hash(dato: string): string{
    let dato_anom="";

    dato_anom=createHash('sha256').update(dato).digest('hex');

    return dato_anom;
  }

  //La anonimización NO es reversible.
  anonimizacion(datos: any): any{
    for (let key in datos){
      datos[key]=datos[key].trim(); //se quitan espacios al principio y al final de la cadena
      datos[key]=this.anonimizar_hash(datos[key]);
    }

    return datos;
  }

  /*
  *  Para realizar la pseudonimización se utiliza el cifrado AES
  *  La longitud de la clave depende de la versión utilizada:
  *     -AES128: clave de 16 bytes
  *     -AES192: clave de 24 bytes
  *     -AES256: clave de 32 bytes
  */
  pseudonimizar_cifrado(dato: string, clave: any, iv: any): Buffer{
    const cifrado=createCipheriv('aes-256-ctr',clave,iv);

    let encriptado = cifrado.update(dato,'utf8');
    
    encriptado = Buffer.concat([encriptado, cifrado.final()]);

    return encriptado;
  }

  pseudonimizar_descifrado(clave: Buffer, iv: Buffer, encriptado:Buffer): string{
    const descifrado=createDecipheriv('aes-256-ctr',clave,iv);

    let desencriptado = descifrado.update(encriptado);
    
    desencriptado = Buffer.concat([desencriptado, descifrado.final()]);

    return desencriptado.toString('utf8');
  }

  pseudonimizacion(datos: any, datos_descf:any): any{
    const iv=randomBytes(16); //vector de inicilización
    const contr='Generador1234' //Contraseña para generar la clave, cuya longitud depende de la versión del algoritmo AES utilizado.

    const clave = pbkdf2Sync(contr,'salt',100000,32,'sha256');
    
    for (let key in datos){
      datos[key]=datos[key].trim(); //se quitan espacios al principio y al final de la cadena
      
      let encriptado=this.pseudonimizar_cifrado(datos[key],clave,iv);
      datos[key]=encriptado.toString('hex');

      datos_descf[key]=this.pseudonimizar_descifrado(clave,iv,encriptado);
    }

    return datos;
  }
}
