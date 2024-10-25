const mongoose = require("mongoose");

const budgetTracker = new mongoose.Schema({
    userId: String,
    descriptions: [{content: String, date: Date}],
    amount: Number,
    type: String,
    date: Date,
    transaction_id: String,
    benAccountName: String,
    benAccountNo: String,
    bankName: String,
    accountNo: String,
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date
}, {
    timestamps: true,
},);

const BudgetTracker = mongoose.model("BudgetTracker", budgetTracker, "budget-tracker");

module.exports = BudgetTracker;
