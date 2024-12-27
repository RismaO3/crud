"use server"

import { PrismaClient } from "@prisma/client";

// BUAT VARIABEL "PRISMA CLIENT"
const prisma = new PrismaClient();

// buat fungsi untuk tampil data mahasiswa
export async function getData() {
    // BUAT VARIABEL
    // UNTUK TAMPILKAN DATA MAHASISWA
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
        where: {
            status: "Y",
            // prodi : {
            //   contains: "Sistem",
            // }
        },
    });

    return mahasiswa

}

// buat fungsi (arrow function) untuk hapus data
// export function setDelete()
export const setUpdateStatus = async (npm: string) => {
    // BUAT VARIABEL
    // UNTUK UBAH STATUS DATA MAHASISWA ( Y >> T)
    await prisma.tb_mahasiswa.updateMany({
        where: {
            npm: npm,

        },
        data: {
            status: 'T',
        }
    });

}

export const setDeleteData = async (npm: string) => {
    // BUAT VARIABEL
    // UNTUK HAPUS DATA MAHASISWA 
    await prisma.tb_mahasiswa.deleteMany({
        where: {
            npm: npm,
        }
    });
}

// berfungsi untuk cek data mahasiswa (npm
export const checkData = async (npm: string) => {
    // BUAT VARIABEL
    // UNTUK CEK DATA MAHASISWA
    const check = await prisma.tb_mahasiswa.findMany({
        select: {
            id: true,
        },
        where: {
            npm: npm,
            // prodi : {
            //   contains: "Sistem",
            // }
        },
    });

    return check
}

// buat fungsi untuk simpan data mahasiswa
export const setSaveData = async (npm: string, nama: string, prodi: string) => {
    await prisma.tb_mahasiswa.create({
        data: {
            npm: npm,
            nama: nama,
            prodi: prodi,
            status: 'Y',
        },
    })
}

// berfungsi untuk tampil detail data mahasiswa (npm)
export const detailData = async (npm: string) => {
    // BUAT VARIABEL
    // UNTUK CEK DATA MAHASISWA
    const detail = await prisma.tb_mahasiswa.findMany({
        where: {
            npm: npm,
        },
    });

    return detail;
}