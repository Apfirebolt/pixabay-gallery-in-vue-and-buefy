import { ref } from "vue";

const dinosaurs = ref([]);

export function useDinosaur() {
  const getDinosaur = async () => {
    try {
      const response = await fetch(
        "https://dinosaur-facts-api.shultzlab.com/dinosaurs"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dinosaurs.value = data;
    } catch (error) {
      console.error("Error fetching dinosaur data:", error);
    }
  };

  return {
    dinosaurs,
    getDinosaur,
  };
}
