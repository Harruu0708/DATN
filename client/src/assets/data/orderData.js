import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const rentalOrders = [
  {
    orderId: 1,
    carId: 1, // Nissan Altima
    carName: "Nissan Altima",
    imgUrl: img01,
    carOwner: "Michael Johnson",
    ownerAvatar: "../all-images/owners-img/owner1.jpg",
    customerName: "John Doe",
    customerAvatar: "../all-images/customers-img/customer1.jpg",
    rentalDate: "2024-12-08",
    returnDate: "2024-12-12",
    pricePerDay: 50,
    totalAmount: 400,
    status: "Confirmed",
    quantity: 2,
  },
  {
    orderId: 2,
    carId: 2, // Toyota Prius
    carName: "Toyota Prius",
    imgUrl: img02,
    carOwner: "Emily Carter",
    ownerAvatar: "../all-images/owners-img/owner2.jpg",
    customerName: "Jane Smith",
    customerAvatar: "../all-images/customers-img/customer2.jpg",
    rentalDate: "2024-12-09",
    returnDate: "2024-12-11",
    pricePerDay: 40,
    totalAmount: 80,
    status: "Pending",
    quantity: 1,
  },
  {
    orderId: 3,
    carId: 3, // BMW X5
    carName: "BMW X5",
    imgUrl: img03,
    carOwner: "Sophia Williams",
    ownerAvatar: "../all-images/owners-img/owner3.jpg",
    customerName: "Chris Brown",
    customerAvatar: "../all-images/customers-img/customer3.jpg",
    rentalDate: "2024-12-10",
    returnDate: "2024-12-14",
    pricePerDay: 85,
    totalAmount: 340,
    status: "Completed",
    quantity: 1,
  },
  {
    orderId: 4,
    carId: 4, // Nissan Rogue
    carName: "Nissan Rogue",
    imgUrl: img04,
    carOwner: "Daniel Wilson",
    ownerAvatar: "../all-images/owners-img/owner4.jpg",
    customerName: "Emma Watson",
    customerAvatar: "../all-images/customers-img/customer4.jpg",
    rentalDate: "2024-12-05",
    returnDate: "2024-12-08",
    pricePerDay: 60,
    totalAmount: 180,
    status: "Cancelled",
    quantity: 1,
  },
  {
    orderId: 5,
    carId: 5, // Toyota Camry
    carName: "Toyota Camry",
    imgUrl: img05,
    carOwner: "Oliver Davis",
    ownerAvatar: "../all-images/owners-img/owner5.jpg",
    customerName: "Sophia Martinez",
    customerAvatar: "../all-images/customers-img/customer5.jpg",
    rentalDate: "2024-12-11",
    returnDate: "2024-12-13",
    pricePerDay: 45,
    totalAmount: 90,
    status: "Confirmed",
    quantity: 1,
  },
  {
    orderId: 6,
    carId: 6, // Mercedes GLA
    carName: "Mercedes GLA",
    imgUrl: img06,
    carOwner: "William Evans",
    ownerAvatar: "../all-images/owners-img/owner6.jpg",
    customerName: "Lucas Hernandez",
    customerAvatar: "../all-images/customers-img/customer6.jpg",
    rentalDate: "2024-12-10",
    returnDate: "2024-12-12",
    pricePerDay: 95,
    totalAmount: 190,
    status: "Pending",
    quantity: 1,
  },
  {
    orderId: 7,
    carId: 7, // Toyota Corolla Altis
    carName: "Toyota Corolla Altis",
    imgUrl: img07,
    carOwner: "Charlotte Miller",
    ownerAvatar: "../all-images/owners-img/owner7.jpg",
    customerName: "Ethan Moore",
    customerAvatar: "../all-images/customers-img/customer7.jpg",
    rentalDate: "2024-12-13",
    returnDate: "2024-12-16",
    pricePerDay: 55,
    totalAmount: 165,
    status: "Confirmed",
    quantity: 1,
  },
  {
    orderId: 8,
    carId: 8, // Mercedes C-Class
    carName: "Mercedes C-Class",
    imgUrl: img08,
    carOwner: "Liam Johnson",
    ownerAvatar: "../all-images/owners-img/owner8.jpg",
    customerName: "Olivia Garcia",
    customerAvatar: "../all-images/customers-img/customer8.jpg",
    rentalDate: "2024-12-15",
    returnDate: "2024-12-17",
    pricePerDay: 100,
    totalAmount: 200,
    status: "Completed",
    quantity: 1,
  },
];

export default rentalOrders;
