const Staff = require("./staff");

class Teachers extends Staff {

    constructor(teacherData){
        super(teacherData);
        this.floorsCovered = teacherData.floorsCovered
        this.classesTaught= teacherData.floorsCovered
        this.subject = teacherData.subject,
        this.employmentType = teacherData.employmentType
    }

}

module.exports = Teachers;