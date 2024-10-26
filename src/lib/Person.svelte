<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Person component for displaying member database info.
  -->

<script lang="ts">
    export let person: any;
    export let type: "member" | "applicant";
    export let onAccept: (email: string) => void;
    export let onReject: (email: string) => void;

    let expanded = false;

    function toggleExpand() {
        expanded = !expanded;
    }

    person.instruments = person.instruments || [];
</script>

<button
    class="w-full text-left bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer"
    on:click={toggleExpand}
    aria-expanded={expanded}
>
    <div class="flex justify-between items-center">
        <div>
            <h3 class="text-lg font-semibold">{person.name || "No name"}</h3>
            <p class="text-gray-600">{person.email || "No email"}</p>
            <p class="text-gray-600">{person.phone || "No phone"}</p>
        </div>
        {#if type === "applicant"}
            <div class="flex gap-2">
                <button
                    type="button"
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    on:click|stopPropagation={() => onAccept(person.email)}
                    aria-label="Accept application"
                >
                    Accept
                </button>
                <button
                    type="button"
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    on:click|stopPropagation={() => onReject(person.email)}
                    aria-label="Reject application"
                >
                    Reject
                </button>
            </div>
        {/if}
    </div>

    {#if expanded}
        <div
            class="mt-4 border-t pt-4"
            role="region"
            aria-label="Additional details"
        >
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p>
                        <strong>Address:</strong>
                        {person["address/street"] || ""}, {person[
                            "address/city"
                        ] || ""}, {person["address/state"] || ""}
                        {person["address/zip"] || ""}
                    </p>
                    <p>
                        <strong>School:</strong>
                        {person.school || "Not specified"}
                    </p>
                    <p>
                        <strong>Grade:</strong>
                        {person.grade || "Not specified"}
                    </p>
                    <p>
                        <strong>Birthday:</strong>
                        {person.birthday || "Not specified"}
                    </p>
                    <p>
                        <strong>Instruments:</strong>
                        {person.instruments.length > 0
                            ? person.instruments.join(", ")
                            : "None"}
                    </p>
                </div>
                <div>
                    <p><strong>Parent 1:</strong></p>
                    <p>{person["parent1/name"] || "Not specified"}</p>
                    <p>{person["parent1/phone"] || "Not specified"}</p>
                    <p>{person["parent1/email"] || "Not specified"}</p>

                    <p class="mt-2"><strong>Parent 2:</strong></p>
                    <p>{person["parent2/name"] || "Not specified"}</p>
                    <p>{person["parent2/phone"] || "Not specified"}</p>
                    <p>{person["parent2/email"] || "Not specified"}</p>
                </div>
            </div>
            {#if person.bio}
                <div class="mt-4">
                    <p><strong>Biography:</strong></p>
                    <p>{person.bio}</p>
                </div>
            {/if}
        </div>
    {/if}
</button>
