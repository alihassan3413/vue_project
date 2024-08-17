<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { boolean } from "zod";

interface props {
  title?: string;
  description?: string;
}

defineProps<props>();

const isOpen = defineModel("isOpen", {
  required: true,
  type: Boolean,
});

const emit = defineEmits(["onClose"]);
</script>

<template>
  <Dialog :open="isOpen" @update:open="emit('onClose')">
    <DialogContent>
      <DialogHeader>
        <DialogTitle v-if="title">{{ title }}</DialogTitle>
        <DialogDescription>
          {{ description }}
        </DialogDescription>
      </DialogHeader>

      <slot />
    </DialogContent>
  </Dialog>
</template>
