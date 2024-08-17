<template>
  <Modal :isOpen="isOpen" @on-close="onClose">
    <div class="overflow-y-auto h-[500px] max-h-[600px]">
      <form action="">
        <div class="grid gap-2">
          <Label for="name">Name</Label>
          <Input id="name" type="text" placeholder="name" v-model="form.name" />
        </div>
        <div class="grid gap-2">
          <Label for="price">Price</Label>
          <Input
            id="price"
            type="number"
            placeholder="price"
            v-model="form.price"
          />
        </div>
        <div class="grid gap-2">
          <Label for="stock">Stock</Label>
          <Input
            id="stock"
            type="number"
            placeholder="Stock"
            v-model="form.stock"
          />
        </div>
        <div class="grid gap-2">
          <Label for="description">Description</Label>
          <Input
            id="description"
            type="text"
            placeholder="description"
            v-model="form.description"
          />
        </div>
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue";
import productModal from "@/composables/useProductModal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useGlobalLoader } from "vue-global-loader";
import { ref } from "vue";

const { isOpen, onClose } = productModal();
const { displayLoader, destroyLoader } = useGlobalLoader();
type PAYLOAD = {
  name: string;
  price: number;
  stock: number;
  mainImage: File | undefined;
  subImage: File | undefined;
  description: string;
  category: string | undefined;
};
const form = ref<PAYLOAD>({
  name: "Product 1",
  price: 500,
  stock: 200,
  mainImage: undefined,
  subImage: undefined,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque similique vel dolorem natus, error exercitationem blanditiis quos adipisci accusantium eveniet cum. Id, asperiores temporibus aliquam ratione eos delectus sequi.",
  category: undefined,
});
</script>

<style scoped></style>
