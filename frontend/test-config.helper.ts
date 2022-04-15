import { TestBed, TestBedStatic } from '@angular/core/testing';

type CompilerOptions = Partial<{
  providers : any[];
  useJit : boolean;
  preserveWhitespaces : boolean;
}>;
export type ConfigureFunction = (testBed : typeof TestBed) => void;

export function configureTests(configure : ConfigureFunction, compilerOptions : CompilerOptions =
	{}) : Promise<TestBedStatic>
{
	const compilerConfig : CompilerOptions =
	{
    preserveWhitespaces: false,
    ...compilerOptions
 	 };

	const configuredTestBed : TestBedStatic = TestBed.configureCompiler(compilerConfig);

	configure(configuredTestBed);

	return configuredTestBed.compileComponents().then(() => configuredTestBed);
}
