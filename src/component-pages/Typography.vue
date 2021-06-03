<template>
    <div class="ntwinds__page bg-gray-200 mb-28">
        <div class="flex flex-col space-y-6 p-10">
            <div>
                <div>(text-xs)</div>
                <div class="text-xs">
                    {{ Dummy.text(20, 50) }}
                </div>
            </div>
            <div>
                <div>(text-sm)</div>
                <div class="text-sm">
                    {{ Dummy.text(20, 50) }}
                </div>
            </div>
            <div>
                <div>(text-base)</div>
                <div class="text-base">
                    {{ Dummy.text(20, 50) }}
                </div>
            </div>
            <div>
                <div>(text-lg)</div>
                <div class="text-lg">
                    {{ Dummy.text(20, 50) }}
                </div>
            </div>
            <div>
                <div>(text-xl)</div>
                <div class="text-xl">
                    {{ Dummy.text(20, 50) }}
                </div>
            </div>
            <div>
                <div>(text-xxl)</div>
                <div class="text-xxl">
                    {{ Dummy.text(20, 50) }}
                </div>
            </div>
            <div>
                <div>(text-xxxl)</div>
                <div class="text-xxxl">
                    {{ Dummy.text(20, 50) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Dummy from 'dummyjs';
</script>
