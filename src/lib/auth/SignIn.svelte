<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-primary">
			Sign in to your account
		</h2>
	</div>

	<div class="card card-hover variant-ghost mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-primary"
						>Email address</label
					>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="btn flex w-full justify-center rounded-md variant-ghost-primary py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
						>Sign in</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
