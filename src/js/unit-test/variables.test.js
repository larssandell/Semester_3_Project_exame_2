import { emailVali } from '../components/variables';

test('If the validator returns correct', () => {
    const myBadEmail = 'lars.@lars.no';
    const myOkEmail = 'lars@stud.noroff.no';
    const testBad = emailVali(myBadEmail);
    const testOk = emailVali(myOkEmail);
    console.log('Test Bad:', myBadEmail, '=', testBad);
    console.log('Test OK:', myOkEmail, '=', testOk);
    expect(testBad).toBe(false);
    expect(testOk).toBe(true);
});
