const BudgetTracker = require('../models/budgetTracker.model');
const {addBudgetTracker, getBudgetTracker, checkRecordExists} = require('../service/notion.service')
require('dotenv').config();

const verifyToken = (token) => {
    return token === process.env.TOKEN_WEHOOK_SECRET;
};

// POST budget-tracker/syncBank
const handlesyncBank = async (req, res) => {
    const record = req.body?.payment;
    const token = req.body?.token;

    try {
        if (!verifyToken(token)) {
            return res.status(401).json({message: 'Unauthorized'});
        }

        if (!record?.transaction_id) {
            return res.status(400).json({error: 'Missing transaction_id'});
        }

        const isExist = await checkRecordExists(record.transaction_id);

        if (!isExist) {
            const response = await addBudgetTracker(record);
            res.status(200).json({message: 'Sync Bank successfully'});
        } else {
            res.status(200).json({message: 'Record already exists'});
        }

    } catch (e) {
        res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {handlesyncBank}