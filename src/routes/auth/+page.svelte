<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Login page for authentication.
  -->

<script lang="ts">
    import Header from "../../lib/Header.svelte";
    import Footer from "../../lib/Footer.svelte";

    import { enhance } from "$app/forms";
    import { type ActionResult } from "@sveltejs/kit";

    let activeTab = "login"; // 'login' or 'signup'

    function handleSignUp() {
        return async ({ result }: { result: ActionResult }) => {
            if (result.type === "success") {
                activeTab = "login";
            } else if (result.type === "failure") {
                console.error(result);
                alert(result.data.error);
            }
        };
    }
</script>

<div class="flex flex-col min-h-dvh">
    <Header />
    <main class="flex-1 flex bg-white items-center justify-center">
        <div class="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-md">
            <!-- Tabs -->
            <div class="flex mb-6 border-b border-gray-700">
                <button
                    class={`flex-1 py-2 text-center text-sm font-medium ${
                        activeTab === "login"
                            ? "text-white border-b-2 border-blue-500"
                            : "text-gray-400 hover:text-gray-200"
                    }`}
                    on:click={() => (activeTab = "login")}
                >
                    Login
                </button>
                <button
                    class={`flex-1 py-2 text-center text-sm font-medium ${
                        activeTab === "signup"
                            ? "text-white border-b-2 border-blue-500"
                            : "text-gray-400 hover:text-gray-200"
                    }`}
                    on:click={() => (activeTab = "signup")}
                >
                    Applicant Signup
                </button>
            </div>

            {#if activeTab === "login"}
                <!-- Login Form -->
                <form method="POST" action="?/login">
                    <div class="mb-4">
                        <label
                            class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="email"
                        >
                            Email
                        </label>
                        <input
                            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="password"
                        >
                            Password
                        </label>
                        <input
                            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <a
                            href="/auth/forgot"
                            class="text-blue-200 hover:text-blue-700 text-sm"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        class="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full bg-gray-300 hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            {:else}
                <!-- Signup Form -->
                <form
                    method="POST"
                    action="?/signup"
                    use:enhance={handleSignUp}
                >
                    <div class="mb-4">
                        <label
                            class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="email"
                        >
                            Email
                        </label>
                        <input
                            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="password"
                        >
                            Password
                        </label>
                        <input
                            class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                            name="password"
                            type="password"
                            placeholder="Create a password"
                        />
                    </div>
                    <button
                        class="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
            {/if}
        </div>
    </main>
    <Footer />
</div>
