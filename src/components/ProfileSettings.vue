<template>
    <div class="flex flex-col">
        <div class="font-semibold mb-6 text-xl">Profile Settings</div>
        <div class="w-full space-y-4">
            <div class="flex space-x-2">
                <div class="w-1/4 text-sm mb-1 font-medium">Avatar</div>
                <div class="w-3/4 bg-gray-100 p-3 text-center">Upload Image</div>
            </div>
            <div class="flex space-x-2">
                <div class="w-1/4 text-sm mb-1 font-medium">Email</div>
                <input type="email" class="inpt-md w-3/4" />
            </div>
            <div class="flex space-x-2">
                <div class="w-1/4 text-sm mb-1 font-medium">Username</div>
                <input type="text" class="inpt-md w-3/4" />
            </div>
            <div class="flex space-x-2">
                <div class="w-1/4 text-sm mb-1 font-medium">Introduction</div>
                <textarea rows="3" class="inpt p-3 w-3/4 resize-none"></textarea>
            </div>
            <div class="flex space-x-2">
                <div class="w-1/4 text-sm mb-1 font-medium">Social Media Accounts</div>
                <div class="w-3/4 space-y-4">
                    <input type="text" class="inpt-md w-full" />
                    <input type="text" class="inpt-md w-full" />
                    <input type="text" class="inpt-md w-full" />
                </div>
            </div>
            <div class="flex justify-end">
                <button class="btn-md btn-primary">Save</button>
            </div>
        </div>
    </div>
</template>
