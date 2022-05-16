function CheckFields(req, res, next) {
    const { name, email, grade } = req.body
    if (isEmpty(grade) == true) {
        if (isEmpty(name) == true || isEmpty(email) == true) {
            return res.status(400).json({ msg: 'Invalid Fields' });
        }
    }
    if (isEmpty(email) == true) {
        if (isEmpty(name) == true || isEmpty(grade) == true) {
            return res.status(400).json({ msg: 'Invalid Fields' });
        }
    }

    return next();
}

function isEmpty(value) {
    return (value == null || value.length === 0);
}

export default CheckFields;