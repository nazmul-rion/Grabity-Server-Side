const mongoose = require("mongoose");
let departmentSchema = new mongoose.Schema({
    DepartmentName: {
        type: String,
        required: true
    },

    DepartmentPhoto: {
        type: String,
        required: true
    },

    SubDepartment: {
        type: Array,
        required: true
    }

}, {
    collection: "DepartmentListCollection"
})

module.exports = mongoose.model("DepartmentListCollection", departmentSchema);