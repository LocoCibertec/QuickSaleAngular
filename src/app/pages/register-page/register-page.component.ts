import { Component, OnInit, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { SharedFormBasicModule } from '../../commons/shared/shared-form-basic.module';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { customPasswordValidator } from 'src/app/commons/validators/forms.validator';
import { PATHS_AUTH_PAGES } from 'src/app/commons/config/path-pages';
import { UserApiService } from 'src/app/commons/services/api/user/user-api.service';
import { PasswordStateMatcher, crossPasswordMatchingValidatior } from './register-custom-validators';

@Component({
	standalone: true,
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss'],
	imports: [RouterModule, MatSelectModule, SharedFormBasicModule]
})
export default class RegisterPageComponent implements OnInit {
	ngOnInit(): void {
		console.log('');
		//this.formGroup.controls.firstName.valueChanges.subscribe((value) => {
		//	console.log(value);
		//});
	}
	readonly pathLogin = PATHS_AUTH_PAGES.loginPage.withSlash;
	private _router = inject(Router);
	private _FormBuilder = inject(FormBuilder);
	private _userApiService = inject(UserApiService);

	passwordStateMatcher = new PasswordStateMatcher();
	disabledButton = false;

	formGroup = this._FormBuilder.nonNullable.group(
		{
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			typeDocument: ['1'],
			documentNumber: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, customPasswordValidator]],
			confirmPassword: ['', Validators.required],
			age: this._FormBuilder.control<number | null>(null)
		},
		{
			validators: crossPasswordMatchingValidatior
		}
	);

	clickRegister(): void {}

	get firtsField(): FormControl<string> {
		return this.formGroup.controls.firstName;
	}

	get lastNameField(): FormControl<string> {
		return this.formGroup.controls.lastName;
	}

	get typeDocumentField(): FormControl<string | null> {
		return this.formGroup.controls.typeDocument;
	}

	get documentNumberField(): FormControl<string> {
		return this.formGroup.controls.documentNumber;
	}

	get emailField(): FormControl<string> {
		return this.formGroup.controls.email;
	}

	get passwordField(): FormControl<string> {
		return this.formGroup.controls.password;
	}

	get confirmPasswordField(): FormControl<string> {
		return this.formGroup.controls.confirmPassword;
	}

	get ageField(): FormControl<number | null> {
		return this.formGroup.controls.age;
	}
}
