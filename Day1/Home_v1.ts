import { read } from "./console";

async function main(): Promise<void>
{
    //Здесь необходимо писать реализацию
    console.log('Решение квадратного уровнения');
    console.log();
    console.log('Введите a=');
    const a_str = await read();
    var a = Number(a_str);
    
    console.log('Введите b=');
    const b_str = await read();
    var b = Number(b_str);

    console.log('Введите c=');
    const c_str = await read();
    var c = Number(c_str);

    var D: number = (b*b)-(4*a*c);

    if (D>0 && a!=0) {
        console.log('Действительные корни');
        console.log('x1='+(-b+(D**0.5))/(2*a));
        console.log('x2='+(-b-(D**0.5))/(2*a));
    } else if (D===0 && a!=0 && b!=0 && c!=0) {
        console.log('Действительные корни совпадают');
        console.log('x='+(-(b/2)/a));
    } else if (D<0) {
        console.log('Уравнение является комплексным - без решения');
    } else if (a===0 && b!=0 && c!=0) {
        console.log('Уравнение имеет одно решение и становится линейным');
        console.log('x='+(-(c/b)));
    } else if (a===0 && b===0 && c===0) {
        console.log('Введенное вами уравнение не имеет решений или их бесчисленное множество');
    } else if (a===0 && b===0 && c!=0) {
        console.log('Введенное вами уравнение не имеет решений или их бесчисленное множество');
    } else {
        console.log('Не знаю такого варианта решения :)')
    }
}
main();