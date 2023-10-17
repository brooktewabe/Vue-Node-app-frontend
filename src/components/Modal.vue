<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ darkMode: theme === 'darkMode' }">
            <!-- <h1>{{ header }}</h1> -->
            <slot></slot>
            <div class="actions">
                <slot name="linkandpar"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'theme'],
    methods: {
        closeModal() {
            this.$emit('closeMyModal')
        }
    }
}
</script>

<style scoped>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
    text-align: center;
}
.modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
  }
  .modal.actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }

.modal.darkMode {
    background-color: crimson;
    color: white;
}

.modal.darkMode h1 {
    color: white;
}
.modal.darkMode .actions{
    color: white;
}
.modal.darkMode .actions a {
    color: white;
}
</style>