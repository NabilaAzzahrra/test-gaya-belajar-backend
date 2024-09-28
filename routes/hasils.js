const express = require('express');
const router = express.Router();
const ExcelJS = require('exceljs');
const { Hasil } = require('../models');

router.get('/', async (req, res) => {
    try {
        const results = await Hasil.findAll({
            attributes: {
                exclude: "id",
            }
        });
        return res.status(200).json(results);
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.get('/download', async (req, res) => {
    try {
        const results = await Hasil.findAll({
            attributes: {
                exclude: "id",
            }
        });

        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Hasil Kecerdasan');

        sheet.addRow(['No.', 'Nama Lengkap', 'Kelas', 'Sekolah', 'Score A', 'Score B', 'Score C', 'Hasil']);

        const groupedResults = [];

        results.forEach((result) => {
            const hasil = groupedResults.find((group) => group.user_id == result.user_id);
            // if (hasil) {
            //     hasil.agilities.push({
            //         jenis_kecerdasan: result.jenis_kecerdasan,
            //     });

            //     // Assuming you want to keep only the first intelligence type
            //     // hasil.agilities = [hasil.agilities[0]];

            // } else {
            groupedResults.push({
                user_id: result.user_id,
                nama: result.nama,
                kelas: result.kelas,
                sekolah: result.sekolah,
                score_A: result.score_A,
                score_B: result.score_B,
                score_C: result.score_C,
                hasil: result.hasil,
            });
            // }
        });

        groupedResults.forEach((groupedResult, index) => {
            sheet.addRow([
                index + 1,
                `${groupedResult.nama}`,
                `${groupedResult.kelas}`,
                `${groupedResult.sekolah}`,
                `${groupedResult.score_A}`,
                `${groupedResult.score_B}`,
                `${groupedResult.score_C}`,
                `${groupedResult.hasil}`,
            ]);
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="example.xlsx"');

        const buffer = await workbook.xlsx.writeBuffer();
        res.send(buffer);

    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

router.get('/:idUser', async (req, res) => {
    try {
        const hasils = await Hasil.findOne({
            attributes: {
                exclude: "id",
            },
            where: {
                user_id: req.params.idUser,
            }
        });
        return res.status(200).json(hasils);
    } catch (error) {
        return res.json({
            message: error.message
        });
    }
});

module.exports = router;
