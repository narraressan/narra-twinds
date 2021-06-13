<template>
    <div class="flex flex-col">
        <div class="font-semibold mb-6 text-xl">Security Settings</div>
        <div class="w-full space-y-4">
            <div class="flex space-x-2">
                <div class="w-1/4 text-sm mb-1 font-medium">Current Password</div>
                <input type="password" class="inpt-md w-3/4" />
            </div>
            <div class="flex space-x-2">
                <div class="w-1/4 text-sm mb-1 font-medium">New Password</div>
                <input type="password" class="inpt-md w-3/4" />
            </div>
            <div class="flex space-x-2">
                <div class="w-1/4 text-sm mb-1 font-medium">Confirm Password</div>
                <input type="password" class="inpt-md w-3/4" />
            </div>
            <div class="flex justify-end">
                <button class="btn-md btn-primary">Reset Password</button>
            </div>
        </div>
    </div>
</template>
