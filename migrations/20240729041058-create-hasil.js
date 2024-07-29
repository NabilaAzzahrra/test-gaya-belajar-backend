'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE VIEW view_hasil AS
      SELECT 
    user_id,
    nama,
    kelas,
    sekolah,
    SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END) AS score_A,
    SUM(CASE WHEN options = 'B' THEN 1 ELSE 0 END) AS score_B,
    SUM(CASE WHEN options = 'C' THEN 1 ELSE 0 END) AS score_C,
    CASE 
        WHEN SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END) = SUM(CASE WHEN options = 'B' THEN 1 ELSE 0 END)
             AND SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END) > SUM(CASE WHEN options = 'C' THEN 1 ELSE 0 END) 
             THEN 'VISUAL and AUDITORY'
        WHEN SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END) = SUM(CASE WHEN options = 'C' THEN 1 ELSE 0 END)
             AND SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END) > SUM(CASE WHEN options = 'B' THEN 1 ELSE 0 END) 
             THEN 'VISUAL and KINESTETIK'
        WHEN SUM(CASE WHEN options = 'B' THEN 1 ELSE 0 END) = SUM(CASE WHEN options = 'C' THEN 1 ELSE 0 END)
             AND SUM(CASE WHEN options = 'B' THEN 1 ELSE 0 END) > SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END) 
             THEN 'AUDITORY and KINESTETIK'
        WHEN SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END) > SUM(CASE WHEN options = 'B' THEN 1 ELSE 0 END)
             AND SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END) > SUM(CASE WHEN options = 'C' THEN 1 ELSE 0 END) 
             THEN 'VISUAL' 
        WHEN SUM(CASE WHEN options = 'B' THEN 1 ELSE 0 END) > SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END)
             AND SUM(CASE WHEN options = 'B' THEN 1 ELSE 0 END) > SUM(CASE WHEN options = 'C' THEN 1 ELSE 0 END) 
             THEN 'AUDITORY' 
        WHEN SUM(CASE WHEN options = 'C' THEN 1 ELSE 0 END) > SUM(CASE WHEN options = 'A' THEN 1 ELSE 0 END)
             AND SUM(CASE WHEN options = 'C' THEN 1 ELSE 0 END) > SUM(CASE WHEN options = 'B' THEN 1 ELSE 0 END) 
             THEN 'KINESTETIK' 
        ELSE 'Tie'
    END AS hasil
FROM 
    tests
GROUP BY 
    user_id, nama, kelas, sekolah;

      `);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP VIEW view_hasil`);
  }
};