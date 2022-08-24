import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

const imports = [HttpClientModule, MaterialModule];

@NgModule({
  declarations: [],
  imports,
  exports: [...imports],
})
export class SharedModule {}
