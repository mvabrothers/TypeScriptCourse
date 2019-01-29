import { read } from "./console";
import { Z_ASCII } from "zlib";

async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию

    console.log('Введите одну латинскую букву');
    const str = await read();
    if (a>str>z) {
        console.log('Правильно!');
        else {
           console.log('Неправильно');
        }
    }
}

main();