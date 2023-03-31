<script lang="ts">
  import { ApiVersion } from '$lib/enums';
  async function handleFormSubmit(event: Event) {
    let result;
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the email address entered by the user
    const email = (event.target as HTMLFormElement).email.value;

    // Send a POST request to the login endpoint
    const response = await fetch(`/api/${ApiVersion}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    });

    result = await response.json();

  }
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
  <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-primary">
    Sign in to your account
  </h2>
  <div class="card card-hover variant-ghost mt-8 sm:mx-auto sm:w-full sm:max-w-md p-8">
    <form class="space-y-6" on:submit={handleFormSubmit}>
      <label for="email" class="block text-sm font-medium leading-6 text-primary">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        required
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 mt-2"
      />
      <button
        type="submit"
        class="btn flex w-full justify-center rounded-md variant-ghost-primary py-2 px-3 text-sm font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Sign in
      </button>
    </form>
  </div>
</div>
