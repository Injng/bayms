<!--
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Basic information form component for use on the dashboard.
  -->

<script lang="ts">
  export let user: any;
</script>

<div class="p-6 bg-white rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-4">Basic Information</h2>
  <form method="POST" enctype="multipart/form-data" action="?/save">
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="name"
        >
        Name
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="name"
        placeholder="Enter your name"
        type="text"
	value={user.name}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="email"
        >
        Email
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="email"
        placeholder="Contact administrator for help"
        type="email"
	value={user.email}
	disabled="disabled"
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="phone"
        >
        Phone
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="phone"
        placeholder="Enter your phone number"
        type="tel"
	value={user.phone}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="address-street"
        >
        Address
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full mb-2"
        name="address-street"
        type="text"
        placeholder="Enter your street address"
	value={user["address/street"]}
        />
      <div class="grid grid-cols-3 gap-2">
        <input
          class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
          name="address-city"
          placeholder="City"
          type="text"
	  value={user["address/city"]}
          />
        <input
          class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
          name="address-state"
          placeholder="State"
          type="text"
	  value={user["address/state"]}
          />
        <input
          class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
          name="address-zip"
          placeholder="ZIP Code"
          type="text"
	  value={user["address/zip"]}
          />
      </div>
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="school"
        >
        School
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="school"
        placeholder="Enter your school"
        type="text"
	value={user.school}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="grade"
        >
        Grade
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="grade"
        placeholder="Enter your grade"
        type="text"
	value={user.grade}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="birthday"
        >
        Birthday
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="birthday"
        type="date"
	value={user.birthday}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="picture"
        >
        Upload Picture
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="picture"
        type="file"
	accept=".jpg, .jpeg, .png, .webp"
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="biography"
        >
        Biography
      </label>
      <textarea
        class="flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="biography"
        placeholder="Enter your biography (max 650 chars)"
	value={user.bio}
        ></textarea>
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="parent1-name"
        >
        Parent 1 Name
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="parent1-name"
        type="text"
        placeholder="Enter parent 1 name"
	value={user["parent1/name"]}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="parent1-phone"
        >
        Parent 1 Phone
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="parent1-phone"
        type="tel"
        placeholder="Enter parent 1 phone number"
	value={user["parent1/phone"]}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="parent1-email"
        >
        Parent 1 Email
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="parent1-email"
        placeholder="Enter parent 1 email"
        type="email"
	value={user["parent1/email"]}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="parent2-name"
        >
        Parent 2 Name
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="parent2-name"
        placeholder="Enter parent 2 name"
        type="text"
	value={user["parent2/name"]}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="parent2-phone"
        >
        Parent 2 Phone
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="parent2-phone"
        placeholder="Enter parent 2 phone number"
        type="tel"
	value={user["parent2/phone"]}
        />
    </div>
    <div class="mb-4">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="parent2-email"
        >
        Parent 2 Email
      </label>
      <input
        class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        name="parent2-email"
        placeholder="Enter parent 2 email"
        type="email"
	value={user["parent2/email"]}
        />
    </div>
    <button
      class="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="submit"
      >
      Save
    </button>
  </form>
</div>
