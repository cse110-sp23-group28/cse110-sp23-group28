const url = 'https://cse110-sp23-group28.github.io/cse110-sp23-group28/source/baeometer.html';


describe('page with dialog', () => {

    const dialogHandler = jest.fn(dialog => dialog.dismiss());
    beforeAll(() => {
      page.on('dialog', dialogHandler);
    });
  
    describe('when the buttons are clicked', () => {
      beforeAll(async () => {
        await page.goto(url);
        await page.click('#card1Button');
      });
  
      it('should display a dialog', () => {
        expect(dialogHandler).toHaveBeenCalled();
      });
  
      it('should have message "hi"', () => {
        const [firstCall] = dialogHandler.mock.calls;
        const [dialog] = firstCall;
        expect(dialog.message()).toEqual('hi');
      });
    });
});