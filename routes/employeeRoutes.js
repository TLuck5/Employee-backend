const express = require("express")
const route = express.Router()
const employee = require("../Schema/employees")

route.post("/addEmployee", async (req, res) => {
    try {
        await employee.create({
            name: req.body.name,
            empID: req.body.empID,
            email: req.body.email,
            position: req.body.position,
            department: req.body.department,
            salary: req.body.salary,
            dateOfJoining: req.body.dateOfJoining

        })
        res.json({ success: true })
    } catch (error) {
        console.log(error)
    }
})

route.post("/deleteEmployee/:id", async (req, res) => {
    try {
        const user = await employee.findByIdAndDelete(req.params.id)
        res.json({ success: true, user })
    } catch (error) {
        console.log(error)
    }
})

route.patch("/editEmployee/:id", async (req, res) => {
    const user = await employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, user })
})


route.get("/allEmployee", async (req, res) => {
    const allUsers = await employee.find()
    res.json({ success: true, allUsers })
})

module.exports = route;