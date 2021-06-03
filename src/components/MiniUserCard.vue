<template>
    <div class="rounded-lg bg-white hover:bg-gray-100 cursor-pointer p-2 flex items-center">
        <div class="pr-3 flex-none">
            <slot name="thumbnail" />
        </div>
        <div class="flex flex-col ntwinds__sidebar__text">
            <p class="font-semibold truncate">
                <slot name="title" />
            </p>
            <div class="flex text-xs">
                <slot name="details" />
            </div>
        </div>
    </div>
</template>
