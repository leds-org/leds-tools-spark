import { expandToStringWithNL } from "langium/generate";
import { Model } from "../../../../../language/generated/ast.js"
import fs from "fs";
import path from "path";

export function generate(model: Model, target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder, model.configuration?.name + ".Test.csproj"), generateProjectsln(model))

}

function generateProjectsln(model: Model) : string {
    return expandToStringWithNL`
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>

    <IsPackable>false</IsPackable>
    <IsTestProject>true</IsTestProject>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="coverlet.collector" Version="6.0.0" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.8.0" />
    <PackageReference Include="xunit" Version="2.5.3" />
    <PackageReference Include="Xunit.Gherkin.Quick" Version="4.5.0" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.5.3" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\\${model.configuration?.name}.Application\\${model.configuration?.name}.Application.csproj" />
  </ItemGroup>

  <ItemGroup>
    <Using Include="Xunit" />
  </ItemGroup>
    <!-- Habilitar busca dinâmica dos arquivos .feature -->
	<ItemGroup>
	    <None Update="Features\\*.feature">
		    <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
	    </None>
	</ItemGroup>
</Project>

`
}