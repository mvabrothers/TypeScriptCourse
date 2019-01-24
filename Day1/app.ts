import { read } from "./console";

async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию
    console.log('Как Вас зовут?')
    const str = await read()
    console.log('Hello '+str+'!')

}

main();