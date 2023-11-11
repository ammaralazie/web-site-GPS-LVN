<template>
  <v-dialog transition="dialog-bottom-transition" width="600">
    <template v-slot:activator="{ props }">
      <v-btn text color="error" v-bind="props">
        <v-icon size="90px">
          mdi-youtube
        </v-icon>
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-text class="align-center justify-center d-flex">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, aspernatur asperiores quae, officia, ipsam mollitia quas facere explicabo iure quo eum beatae dolore. Sapiente sit aliquam neque! Tenetur, labore quaerat.
          <v-progress-circular indeterminate color="red"></v-progress-circular>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
