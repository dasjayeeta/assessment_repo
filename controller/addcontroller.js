
// Task 2: Data Manipulation

import addNumbers from "../service/addservice.js"
const additionNumbers = (req, res) => {
    let data = req.body.data;
    console.log(data);
    try {

        addNumbers(data, res);

    } catch (err) {
        console.log(err, "err");
    }
}
export default additionNumbers;