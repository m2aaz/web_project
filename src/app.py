
from flask import Flask, jsonify, request, render_template

app = Flask(__name__, template_folder="../templates", static_folder="../static")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/home", methods=["GET"])
def return_home():
    return jsonify({"message":"Redirecting To Home.."})

members = [
    {"erp_id": "00001", "first_name": "Ali", "last_name": "Khan", "status": "Member"},
    {"erp_id": "00002", "first_name": "Ahmed", "last_name": "Raza", "status": "Member"},
    {"erp_id": "00003", "first_name": "Hamza", "last_name": "Malik", "status": "Captain"},
    {"erp_id": "00004", "first_name": "Usman", "last_name": "Siddiqui", "status": "Member"},
    {"erp_id": "00005", "first_name": "Hassan", "last_name": "Sheikh", "status": "Member"},
    {"erp_id": "00006", "first_name": "Saad", "last_name": "Ahmed", "status": "Member"},
    {"erp_id": "00007", "first_name": "Bilal", "last_name": "Qureshi", "status": "Member"},
    {"erp_id": "00008", "first_name": "Daniyal", "last_name": "Hussain", "status": "Member"},
    {"erp_id": "00009", "first_name": "Zain", "last_name": "Ali", "status": "Member"},
    {"erp_id": "00010", "first_name": "Ahsan", "last_name": "Farooq", "status": "Captain"},
    {"erp_id": "00011", "first_name": "Muneeb", "last_name": "Khalid", "status": "Member"},
    {"erp_id": "00012", "first_name": "Taha", "last_name": "Javed", "status": "Member"},
    {"erp_id": "00013", "first_name": "Rayyan", "last_name": "Aslam", "status": "Member"},
    {"erp_id": "00014", "first_name": "Shahzaib", "last_name": "Iqbal", "status": "Member"},
    {"erp_id": "00015", "first_name": "Fahad", "last_name": "Nadeem", "status": "Member"},
    {"erp_id": "00016", "first_name": "Omer", "last_name": "Butt", "status": "Member"},
    {"erp_id": "00017", "first_name": "Talha", "last_name": "Saeed", "status": "Member"},
    {"erp_id": "00018", "first_name": "Arham", "last_name": "Rauf", "status": "Member"},
    {"erp_id": "00019", "first_name": "Waleed", "last_name": "Akhtar", "status": "Member"},
    {"erp_id": "00020", "first_name": "Haris", "last_name": "Memon", "status": "Member"},
    {"erp_id": "00021", "first_name": "Abdullah", "last_name": "Shah", "status": "Member"},
    {"erp_id": "00022", "first_name": "Ibrahim", "last_name": "Yousuf", "status": "Captain"},
    {"erp_id": "00023", "first_name": "Huzaifa", "last_name": "Baig", "status": "Member"},
    {"erp_id": "00024", "first_name": "Saif", "last_name": "Rashid", "status": "Member"},
    {"erp_id": "00025", "first_name": "Ammar", "last_name": "Hameed", "status": "Member"},
    {"erp_id": "00026", "first_name": "Murtaza", "last_name": "Khan", "status": "Member"},
    {"erp_id": "00027", "first_name": "Sameer", "last_name": "Ahmed", "status": "Member"},
    {"erp_id": "00028", "first_name": "Rayan", "last_name": "Kamal", "status": "Member"},
    {"erp_id": "00029", "first_name": "Yahya", "last_name": "Sultan", "status": "Member"},
    {"erp_id": "00030", "first_name": "Adeel", "last_name": "Mirza", "status": "Member"},
]

valid_status = ["Captain", "Member"]

@app.route("/api/members", methods=["GET"])
def get_members():
    status = request.args.get("status")

    if status:
        status.capitalize()
        if status not in valid_status:
            return jsonify(members), 400
        filtered = [member for member in members if member["status"] == status]

        print(f"Filtered: {filtered}")
        return jsonify(filtered)
    
    sorted_members = sorted(
        members,
        key=lambda member: member["status"] != "Captain"
    )

    return jsonify(sorted_members)