"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question_code: "01",
          questions: "Ketika menjalankan peralatan baru, saya biasanya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "02",
          questions: "Ketika butuh diarahkan ketika jalan, saya biasanya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "03",
          questions: "Ketika memasak hidangan baru, saya senang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "04",
          questions:
            "Jika mengajarkan sesuatu yang baru kepada orang lain, saya cenderung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "05",
          questions: "Saya cenderung berkata",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "06",
          questions: "Sewaktu sedang senggang, saya paling senang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "07",
          questions: "Ketika berbelanja pakaian, saya cenderung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "08",
          questions:
            "Ketika memutuskan akan kemana untuk liburan, saya biasanya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "09",
          questions: "Jika ingin membeli mobil baru, saya akan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "10",
          questions:
            "Ketika mempelajari keahlian baru, saya merasa paling nyaman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "11",
          questions: "Jika memilih makanan dari menu, saya cenderung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "12",
          questions:
            "Ketika mendengarkan band kesayangan, saya pasti tidak tahan untuk tidak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "13",
          questions: "Ketika sedang berkonsentrasi, saya seringkali",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "14",
          questions: "Saya memilih suatu mebel atau hiasan rumah karena",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "15",
          questions: "Ingatan pertama saya adalah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "16",
          questions: "Ketika merasa gelisah, saya akan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "17",
          questions:
            "Saya terutama merasakan diri saya tersambung dengan orang lain karena",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "18",
          questions: "Ketika harus belajar untuk suatu ujian, saya biasanya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "19",
          questions:
            "Jika sedang menerangkan sesuatu kepada seseorang, saya cenderung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "20",
          questions: "Saya benar-benar suka",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "21",
          questions: "Kebanyakan waktu luang saya habis untuk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "22",
          questions:
            "Saat pertama kali mengontak seseorang baru, saya biasanya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "23",
          questions: "Yang pertama saya perhatikan dari orang adalah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "24",
          questions: "Jika sedang marah, saya cenderung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "25",
          questions: "Saya paling mudah mengingat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "26",
          questions:
            "Menurut saya, kita bisa tahu jika seseorang sedang berbohong jika",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "27",
          questions: "Ketika saya bertemu teman lama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "28",
          questions: "Saya menghafal hal-hal dengan cara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "29",
          questions:
            "Jika saya harus komplain tentang barang-barang yang rusak, saya lebih nyaman melakukannya dengan cara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question_code: "30",
          questions: "Saya cenderung mengatakan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
