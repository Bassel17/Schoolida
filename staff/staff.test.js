const Staff = require("./staff");
const Teachers = require("./teachers");

test('getting info from Staff class instance', () => {
    const staffMember = {
        firstName:"Abedelmajeed",
        lastName:"Jurdi",
        phoneNumber:"70981671",
        address:"Nabatieh",
        personalEmail:"abedelmajeed@gmail.com",
        role:"principle",
        schoolidaEmail:"abedelmajeed@schoolida.com",
        baseSalary: 5000,
        bankInfo:{
            bank_IBAN:16748,
            bank_name:"Audi",
            bank_branch:"Audi"
        }
    };
    const staff = new Staff(staffMember);
    expect(staff.firstName).toEqual("Abedelmajeed");
    expect(staff.lastName).toEqual("Jurdi");
    expect(staff.phoneNumber).toEqual("70981671");
    expect(staff.address).toEqual("Nabatieh");
    expect(staff.personalEmail).toEqual("abedelmajeed@gmail.com");
    expect(staff.role).toEqual("principle");
    expect(staff.schoolidaEmail).toEqual("abedelmajeed@schoolida.com");
    expect(staff.baseSalary).toEqual(5000);
    expect(staff.bankInfo).toEqual({
        bank_IBAN:16748,
        bank_name:"Audi",
        bank_branch:"Audi"
    });
});

test("getting info from Teachers class instance",() => {
    const teacherData = {
        firstName:"Bassel",
        lastName:"Kanso",
        phoneNumber:"70991671",
        address:"Nabatieh",
        personalEmail:"bassel@gmail.com",
        role:"teacher",
        schoolidaEmail:"bassel@schoolida.com",
        baseSalary: 2000,
        bankInfo:{
            bank_IBAN:16048,
            bank_name:"Audi",
            bank_branch:"Audi"
        },
        floorsCovered:[1,2,3],
        classesTaught:[1,2,3],
        subject:"English",
        employmentType:"part-time"
    }

    const teacher = new Teachers(teacherData);

    expect(teacher.firstName).toEqual("Bassel");
    expect(teacher.lastName).toEqual("Kanso");
    expect(teacher.phoneNumber).toEqual("70991671");
    expect(teacher.address).toEqual("Nabatieh");
    expect(teacher.personalEmail).toEqual("bassel@gmail.com");
    expect(teacher.role).toEqual("teacher");
    expect(teacher.schoolidaEmail).toEqual("bassel@schoolida.com");
    expect(teacher.baseSalary).toEqual(2000);
    expect(teacher.bankInfo).toEqual({
        bank_IBAN:16048,
        bank_name:"Audi",
        bank_branch:"Audi"
    });
    expect(teacher.floorsCovered).toEqual([1,2,3]);
    expect(teacher.classesTaught).toEqual([1,2,3]);
    expect(teacher.subject).toEqual("English");
    expect(teacher.employmentType).toEqual("part-time");
});