<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Header -->
    <header
      class="text-white shadow-xl bg-gradient-to-r from-orange-500 to-orange-600"
    >
      <div class="container px-4 mx-auto">
        <nav class="flex items-center justify-between py-4">
          <div class="flex items-center space-x-4">
            <button
              @click="$router.go(-1)"
              class="p-2 text-white transition-all duration-200 rounded-full hover:text-gray-200 hover:bg-white/10"
            >
              <i class="text-xl fas fa-arrow-left"></i>
            </button>
            <h1 class="text-2xl font-bold">Laporan Audit</h1>
          </div>
        </nav>
        <div class="pb-4">
          <nav class="flex items-center space-x-2 text-sm">
            <NuxtLink
              to="/"
              class="text-white transition-colors hover:text-gray-200"
              >Home</NuxtLink
            >
            <i class="text-xs fas fa-chevron-right"></i>
            <span class="text-gray-200">laporan-audit</span>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container px-4 py-8 mx-auto">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-4xl font-bold text-gray-800">Laporan Audit</h2>
        <div
          class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
        ></div>
        <p class="mt-4 text-lg text-gray-600">
          Kelola laporan audit dan keuangan Mizan Amanah
        </p>
      </div>

      <!-- Upload/Edit Form -->
      <form
        @submit.prevent="editingReport ? updateReport() : uploadReport()"
        class="p-6 mb-8 border border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100"
      >
        <h4 class="mb-4 text-lg font-semibold text-gray-700">
          <i class="mr-2 text-orange-500 fas fa-plus-circle"></i>
          {{ editingReport ? "Edit Laporan" : "Tambah Laporan Baru" }}
        </h4>

        <div class="grid items-end gap-4 md:grid-cols-4">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Tahun Laporan</label
            >
            <input
              v-model="newYear"
              type="text"
              placeholder="2024"
              class="w-full px-4 py-3 transition-all duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >File PDF</label
            >
            <input
              type="file"
              accept="application/pdf"
              @change="onFileChange"
              class="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 file:cursor-pointer"
              :required="!editingReport"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700"
              >Deskripsi</label
            >
            <input
              v-model="description"
              type="text"
              placeholder="Deskripsi laporan (opsional)"
              class="w-full px-4 py-3 transition-all duration-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none"
            />
          </div>

          <div class="flex space-x-2">
            <button
              type="submit"
              class="flex-1 px-6 py-3 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105"
            >
              <i class="mr-2 fas fa-save"></i>
              {{ editingReport ? "Update" : "Upload" }}
            </button>

            <button
              v-if="editingReport"
              type="button"
              @click="cancelEdit"
              class="px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              <i class="mr-2 fas fa-times"></i>
              Batal
            </button>
          </div>
        </div>
      </form>

      <!-- Search -->
      <div class="mb-6">
        <div
          class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div class="flex-1 max-w-md">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Cari laporan berdasarkan tahun..."
                class="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none"
              />
              <i
                class="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2 fas fa-search"
              ></i>
            </div>
          </div>
          <div class="text-sm text-gray-600">
            <i class="mr-1 fas fa-file-alt"></i>
            Total: {{ filteredReports.length }} laporan
          </div>
        </div>
      </div>

      <!-- Audit Reports List -->
      <div class="space-y-4">
        <div
          v-if="filteredReports.length === 0"
          class="py-12 text-center text-gray-500"
        >
          <i class="mb-4 text-6xl text-gray-300 fas fa-folder-open"></i>
          <p class="text-lg">Belum ada laporan audit</p>
          <p class="text-sm">Silakan tambahkan laporan audit pertama Anda</p>
        </div>

        <div
          v-for="report in filteredReports"
          :key="report.id"
          class="p-6 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-orange-300 group"
        >
          <div
            class="flex flex-col items-start justify-between lg:flex-row lg:items-center"
          >
            <div class="flex-1 mb-4 lg:mb-0">
              <div class="flex items-center mb-2">
                <div
                  class="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
                >
                  <span class="font-bold">{{ report.number }}</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-800">
                    Laporan Audit Tahun {{ report.year }}
                  </h4>
                  <p
                    v-if="report.description"
                    class="mt-1 text-sm text-gray-600"
                  >
                    {{ report.description }}
                  </p>
                  <p class="mt-1 text-xs text-gray-500">
                    <i class="mr-1 fas fa-calendar"></i>
                    Ditambahkan: {{ formatDate(report.createdAt) }}
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap gap-2">
              <button
                @click="viewReport(report)"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:scale-105"
              >
                <i class="mr-2 fas fa-eye"></i>Lihat
              </button>

              <button
                @click="downloadReport(report)"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-md bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-105"
              >
                <i class="mr-2 fas fa-download"></i>Download
              </button>

              <button
                @click="editReport(report)"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-md bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 hover:scale-105"
              >
                <i class="mr-2 fas fa-edit"></i>Edit
              </button>

              <button
                @click="confirmDelete(report)"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-md bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-105"
              >
                <i class="mr-2 fas fa-trash"></i>Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Delete Modal -->
    <div
      v-if="showDeleteModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      @click.self="showDeleteModal = false"
    >
      <div
        class="w-full max-w-md p-6 transition-all duration-300 transform bg-white shadow-2xl rounded-2xl"
      >
        <div class="text-center">
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full"
          >
            <i class="text-2xl text-red-600 fas fa-exclamation-triangle"></i>
          </div>
          <h3 class="mb-2 text-lg font-semibold text-gray-800">
            Konfirmasi Hapus
          </h3>
          <p class="mb-6 text-gray-600">
            Apakah Anda yakin ingin menghapus laporan audit tahun
            <strong>{{ reportToDelete?.year }}</strong
            >? Tindakan ini tidak dapat dibatalkan.
          </p>
          <div class="flex space-x-3">
            <button
              @click="showDeleteModal = false"
              class="flex-1 px-4 py-2 text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Batal
            </button>
            <button
              @click="deleteReport"
              class="flex-1 px-4 py-2 text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div
      v-if="showToast"
      class="fixed z-50 p-4 transition-all duration-300 transform rounded-lg shadow-lg top-4 right-4"
      :class="
        toastType === 'success'
          ? 'bg-green-500 text-white'
          : 'bg-red-500 text-white'
      "
    >
      <div class="flex items-center">
        <i
          class="mr-2 fas"
          :class="
            toastType === 'success'
              ? 'fa-check-circle'
              : 'fa-exclamation-circle'
          "
        ></i>
        {{ toastMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const auditReports = ref([]);
const newYear = ref("");
const description = ref("");
const file = ref(null);
const searchQuery = ref("");
const editingReport = ref(null);
const showDeleteModal = ref(false);
const reportToDelete = ref(null);
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");

// Fetch from backend
onMounted(async () => {
  await fetchReports();
});

const fetchReports = async () => {
  try {
    auditReports.value = await $fetch("/api/audit");
  } catch (err) {
    showToastMessage("Gagal memuat laporan", "error");
  }
};

const filteredReports = computed(() => {
  if (!searchQuery.value) return auditReports.value;
  return auditReports.value.filter(
    (r) =>
      r.year.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (r.description &&
        r.description.toLowerCase().includes(searchQuery.value.toLowerCase()))
  );
});

const onFileChange = (e) => {
  file.value = e.target.files[0];
};

const showToastMessage = (msg, type = "success") => {
  toastMessage.value = msg;
  toastType.value = type;
  showToast.value = true;
  setTimeout(() => (showToast.value = false), 3000);
};

const resetForm = () => {
  editingReport.value = null;
  newYear.value = "";
  description.value = "";
  file.value = null;
};

const uploadReport = async () => {
  if (!file.value)
    return showToastMessage("Pilih file PDF terlebih dahulu", "error");
  const formData = new FormData();
  formData.append("file", file.value);
  formData.append("year", newYear.value);
  formData.append("description", description.value || "");
  try {
    const res = await $fetch("/api/audit/upload", {
      method: "POST",
      body: formData,
    });
    auditReports.value.unshift(res);
    resetForm();
    showToastMessage("Laporan berhasil ditambahkan");
  } catch (err) {
    showToastMessage(err.message || "Gagal upload laporan", "error");
  }
};

const editReport = (report) => {
  editingReport.value = report;
  newYear.value = report.year;
  description.value = report.description || "";
};

const cancelEdit = () => {
  resetForm();
};

const updateReport = async () => {
  if (!editingReport.value) return;
  const formData = new FormData();
  formData.append("year", newYear.value);
  formData.append("description", description.value || "");
  if (file.value) {
    formData.append("file", file.value);
  }
  try {
    const res = await $fetch(`/api/audit/${editingReport.value.id}`, {
      method: "PUT",
      body: formData,
    });
    const idx = auditReports.value.findIndex(
      (r) => r.id === editingReport.value.id
    );
    if (idx !== -1) auditReports.value[idx] = res;
    resetForm();
    showToastMessage("Laporan berhasil diupdate");
  } catch (err) {
    showToastMessage(err.message || "Gagal update laporan", "error");
  }
};

const viewReport = (report) => {
  if (report.fileUrl) {
    window.open(report.fileUrl, "_blank");
  }
};

const downloadReport = (report) => {
  if (report.fileUrl) {
    const link = document.createElement("a");
    link.href = report.fileUrl;
    link.download = `Laporan_Audit_${report.year}.pdf`;
    link.click();
  }
};

const confirmDelete = (report) => {
  reportToDelete.value = report;
  showDeleteModal.value = true;
};

const deleteReport = async () => {
  if (!reportToDelete.value) return;
  try {
    await $fetch(`/api/audit/${reportToDelete.value.id}`, { method: "DELETE" });
    auditReports.value = auditReports.value.filter(
      (r) => r.id !== reportToDelete.value.id
    );
    showDeleteModal.value = false;
    reportToDelete.value = null;
    showToastMessage("Laporan berhasil dihapus");
  } catch (err) {
    showToastMessage(err.message || "Gagal menghapus laporan", "error");
  }
};

const formatDate = (dateString) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
</script>
