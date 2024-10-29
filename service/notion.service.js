const {Client} = require("@notionhq/client")
const notion = new Client({auth: process.env.NOTION_KEY})

module.exports.addBudgetTracker = async (data) => {
    try {
        return notion.pages.create({
            parent: {database_id: process.env.NOTION_DATABASE_ID},
            properties: {
                "Ben Account Name": {
                    "id": "%3DVyE",
                    "type": "rich_text",
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": data?.benAccountName || '',
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": data?.benAccountName || '',
                            "href": null
                        }
                    ]
                },
                "Bank Name": {
                    "id": "L%3AYp",
                    "type": "rich_text",
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": data?.bankName || '',
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": data?.bankName || '',
                            "href": null
                        }
                    ]
                },
                "Type": {
                    "id": "ZBTi",
                    "type": "select",
                    "select": {
                        "id": data?.debitAmount === 0 ? "BhO{" : "th^v" || '',
                        "name": data?.debitAmount === 0 ? 'Income' : 'Expense',
                        "color": data?.debitAmount === 0 ? "green" : "red",
                    }
                },
                "Ben Account No": {
                    "id": "%5C%7CY%40",
                    "type": "rich_text",
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": data?.benAccountNo || '',
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": data?.benAccountNo || '',
                            "href": null
                        }
                    ]
                },
                "Date": {
                    "id": "fk%7Bf",
                    "type": "date",
                    "date": {
                        "start": data?.date || '',
                        "end": null,
                        "time_zone": null
                    }
                },
                "TransactionId": {
                    "id": "jjZV",
                    "type": "rich_text",
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": data?.transaction_id || '',
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": "123456",
                            "href": null
                        }
                    ]
                },
                "Account No": {
                    "id": "kOoj",
                    "type": "rich_text",
                    "rich_text": [
                        {
                            "type": "text",
                            "text": {
                                "content": data?.accountNo || '',
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": data?.accountNo || '',
                            "href": null
                        }
                    ]
                },
                "Amount": {
                    "id": "ugl%3C",
                    "type": "number",
                    "number": data?.debitAmount === 0 ? data?.creditAmount : data?.debitAmount || '',
                },
                "Description": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": data?.content || '',
                                "link": null
                            },
                            "annotations": {
                                "bold": false,
                                "italic": false,
                                "strikethrough": false,
                                "underline": false,
                                "code": false,
                                "color": "default"
                            },
                            "plain_text": data?.content || '',
                            "href": null
                        }
                    ]
                }
            },
        })
    } catch
        (e) {
        console.log(e)
    }
}

module.exports.getBudgetTracker = async () => {
    try {
        return notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports.checkRecordExists = async (transactionId) => {
    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: {
                property: 'TransactionId', // Thay đổi 'Name' thành thuộc tính bạn muốn tìm kiếm
                rich_text: {
                    equals: transactionId,
                },
            },
        });

        // Kiểm tra xem record có tồn tại không
        if (response.results.length > 0) {
            console.log('Record exists:', response.results);
            return true; // Record tồn tại
        } else {
            console.log('Record does not exist.');
            return false; // Record không tồn tại
        }
    } catch (error) {
        console.error('Error checking record:', error);
        return false; // Xử lý lỗi
    }
}