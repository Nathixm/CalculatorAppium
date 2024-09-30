describe('Testando Calculadora Google', () => {
    before(async () => {
        const começo = ''
   
        await $(começo).waitForDisplayed();
    });
 
    it('Soma', async () => {

        const numero1 = '//android.widget.ImageButton[@content-desc="5"]';
        await $(numero1).click()

        const soma = 'accessibility id:plus';
        await $(soma).click()

        const numero2 = '//android.widget.ImageButton[@content-desc="9"]';
        await $(numero2).click()

        const equals = 'accessibility id:equals';
        await $(equals).click();

        const resultado = 'id:com.google.android.calculator:id/result_final';
        expect(await $(resultado).getText()).toEqual('14');

    });


});


/*const el5 = await driver.$("accessibility id:minus");
await el5.click();
const el6 = await driver.$("accessibility id:multiply");
await el6.click();
const el7 = await driver.$("accessibility id:divide");
await el7.click();
const el9 = await driver.$("accessibility id:equals"); */
