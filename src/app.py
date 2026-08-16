
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/home", methods=["GET"])
def return_home():
    return jsonify({"message":"Redirecting To Home.."})

members = [{
    "erp_id" : "00000",
    "first_name" : "Dummy",
    "last_name" : "Value",
    "status" : "Member"
}, {
    "erp_id" : "11111",
    "first_name" : "Dummy2",
    "last_name" : "Value2",
    "status" : "Member"
}, {
    "erp_id" : "22222",
    "first_name" : "Dummy3",
    "last_name" : "Value3",
    "status" : "Captain"
}]
valid_status = ["Captain", "Member"]

@app.route("/api/teams", methods=["GET"])
def get_teams():
    status = request.args.get("status").capitalize()

    if status:
        if status not in valid_status:
            return jsonify(members), 400
        filtered = [member for member in members if member["status"] == status]

        print(f"Filtered: {filtered}")
        return jsonify(filtered)
    return jsonify(members)