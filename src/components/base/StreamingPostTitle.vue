<template>
    <div class="space-x-1 mb-1">
        <div class="inline font-semibold cursor-pointer">
            <slot name="username" />
        </div>
        <div class="inline text-xs">is streaming at</div>
        <div class="inline font-semibold cursor-pointer">
            <slot name="title" />
        </div>
    </div>
    <div class="flex text-xs text-gray-500 font-medium">
        <slot name="timestamp" />
    </div>
</template>
