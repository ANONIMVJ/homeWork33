import { School } from "@/types";
import instance from "./instance";

// Maktab ma'lumotlarini olish
export const getSchoolInfo = async () => {
  try {
    const res = await instance.get<School[]>("/school");
    return res.data.length > 0 ? res.data[0] : null; // Birinchi maktabni yoki null qaytaradi
  } catch (e) {
    alert("Maktab ma’lumotlarini olishda xatolik yuz berdi!");
    console.error(e);
  }
};

// Maktab ma'lumotlarini yangilash
export const updateSchoolInfo = async (updatedSchool: School) => {
  try {
    const res = await instance.put(`/school/${updatedSchool.id}`, updatedSchool);
    return res.data;
  } catch (e) {
    alert("Maktab ma’lumotlarini yangilashda xatolik yuz berdi!");
    console.error(e);
  }
};

// Yangi maktab qo'shish
export const addSchool = async (newSchool: Omit<School, "id">) => {
  try {
    const res = await instance.post("/school", newSchool);
    return res.data;
  } catch (e) {
    alert("Maktab qo'shishda xatolik yuz berdi!");
    console.error(e);
  }
};

// Maktabni o'chirish
export const deleteSchool = async (id: string | number) => {
  try {
    const res = await instance.delete(`/school/${id}`);
    return res.data;
  } catch (e) {
    alert("Maktabni o'chirishda xatolik yuz berdi!");
    console.error(e);
  }
};
