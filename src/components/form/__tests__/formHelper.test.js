import { validateStep1, validateStep2 } from '../formHelper';

describe('formHelper', () => {
    describe('validateStep1', () => {
        it('validates incorrect email', () => {
            const incorrectEmails = ['', 'asd', 'asd@asd'];
            incorrectEmails.forEach((email) => {
                const values = { email };
                const result = validateStep1(values);
                expect(result.email).toBeTruthy();    
            });
        });
        it('validates correct email', () => {
            const incorrectEmails = ['a@a.pl', 'filip_b@bucholc.com'];
            incorrectEmails.forEach((email) => {
                const values = { email };
                const result = validateStep1(values);
                expect(result.email).toBeFalsy();    
            });
        });

        it('validates incorrect password', () => {
            const incorrectPasswords = ['', null];
            incorrectPasswords.forEach((password) => {
                const values = { password };
                const result = validateStep1(values);
                expect(result.password).toBeTruthy();    
            });
        });
        it('validates correct password', () => {
            const passwords = ['sadw123ExW', 'asdd2321f_21'];
            passwords.forEach((password) => {
                const values = { password };
                const result = validateStep1(values);
                expect(result.password).toBeFalsy();    
            });
        });
    });

    describe('validateStep2', () => {
        it('validates incorrect firstname and lastname', () => {
            const incorrectValues = ['', 'asd123', '_'];
            incorrectValues.forEach((value) => {
                const values = { firstname: value, lastname: value };
                const result = validateStep2(values);
                expect(result.firstname).toBeTruthy();
                expect(result.lastname).toBeTruthy();
            });
        });
        it('validates correct firstname', () => {
            const correctValues = ['Filip', 'sadwqdgfSAD'];
            correctValues.forEach((value) => {
                const values = { firstname: value, lastname: value };
                const result = validateStep2(values);
                expect(result.firstname).toBeFalsy();
                expect(result.lastname).toBeFalsy();
            });
        });

        it('validates incorrect dateOfBirth', () => {
            const tooYoungDate ='2022-07-01';
            const emptyDate = '';
            const result1 = validateStep2({ dateOfBirth: tooYoungDate });
            const result2 = validateStep2({ dateOfBirth: emptyDate });
            expect(result1.dob).toBeTruthy();
            expect(result2.dateOfBirth).toBeTruthy();
        });
        it('validates correct dateOfBirth', () => {
            const dateOfBirth ='1999-07-01';
            const result = validateStep2({ dateOfBirth });
            expect(result.dob).toBeFalsy();
            expect(result.dateOfBirth).toBeFalsy();
        });
    });
});
