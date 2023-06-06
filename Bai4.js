// Bài 4: Sử dụng JS để thiết kế lớp Agency.
// + Lớp này có các thuộc tính sau:
// - agencyCode
// – agencyName
// – phoneNumber
// – address
// – email
// + Lớp này có constructor nhận vào 5 thuộc tính trên
// + Lớp này có các phương thức sau
// - getPhonenumber() -> trả về số điện thoại của đại lý và 3 số cuối của điện thoại thay bằng 3 chữ X
// - getInfo() -> Hiển thị thông tin đầy đủ về 1 đại lý (đủ cả 5 thông tin)
// + tạo một mảng agencyList gồm 2 object từ class Agency trên
// + Viết các hàm sau:
// - createAgency() để thêm mới 1 agency vào trong mảng agencyList
// - removeAgency(agencyCode): để xóa 1 agency ra khỏi agenceyList trên

class Agency {
    constructor(agencyCode, agencyName, phoneNumber, address, email) {
        this.agencyCode = agencyCode;
        this.agencyName = agencyName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
    }
    getPhoneNumber() {
        return this.phoneNumber.slice(0, this.phoneNumber.length - 3) + 'xxx';
    }
    getInfo() {
        console.log(this.agencyCode);
        console.log(this.agencyName);
        console.log(this.phoneNumber);
        console.log(this.address);
        console.log(this.email);
    }
}
let agency1 = new Agency("A1", "agency1", '0978546809', 'Hue', "agency1@gmail.com");
let phoneNumber = agency1.getPhoneNumber();
console.log(phoneNumber);

let agencyList = [agency1, new Agency("A2", "agency2", '0905987440', 'Quang Tri', "agency2@gmail.com")];

function createAgency(agencyCode, agencyName, phoneNumber, address, email) {
    let newAgency = new Agency(agencyCode, agencyName, phoneNumber, address, email);
    agencyList.push(newAgency);
}

console.log(agencyList);
function removeAgency(agencyCode) {
    agencyList.forEach((agency, index) => {
        if (agency.agencyCode === agencyCode) {
            agencyList.splice(index, 1);
        }
    })
    return agencyList;
}

removeAgency("A1");
createAgency("A3", "agency3", '0978509668', 'Da Nang', "agency3@gmail.com")
console.log(agencyList);

