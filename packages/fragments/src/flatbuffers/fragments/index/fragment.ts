// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from "flatbuffers";

export class Fragment {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): Fragment {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsFragment(
    bb: flatbuffers.ByteBuffer,
    obj?: Fragment,
  ): Fragment {
    return (obj || new Fragment()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb,
    );
  }

  static getSizePrefixedRootAsFragment(
    bb: flatbuffers.ByteBuffer,
    obj?: Fragment,
  ): Fragment {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Fragment()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb,
    );
  }

  position(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset
      ? this.bb!.readFloat32(
          this.bb!.__vector(this.bb_pos + offset) + index * 4,
        )
      : 0;
  }

  positionLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  positionArray(): Float32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset
      ? new Float32Array(
          this.bb!.bytes().buffer,
          this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
          this.bb!.__vector_len(this.bb_pos + offset),
        )
      : null;
  }

  normal(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset
      ? this.bb!.readFloat32(
          this.bb!.__vector(this.bb_pos + offset) + index * 4,
        )
      : 0;
  }

  normalLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  normalArray(): Float32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset
      ? new Float32Array(
          this.bb!.bytes().buffer,
          this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
          this.bb!.__vector_len(this.bb_pos + offset),
        )
      : null;
  }

  index(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset
      ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4)
      : 0;
  }

  indexLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  indexArray(): Uint32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset
      ? new Uint32Array(
          this.bb!.bytes().buffer,
          this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
          this.bb!.__vector_len(this.bb_pos + offset),
        )
      : null;
  }

  groups(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset
      ? this.bb!.readFloat32(
          this.bb!.__vector(this.bb_pos + offset) + index * 4,
        )
      : 0;
  }

  groupsLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  groupsArray(): Float32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset
      ? new Float32Array(
          this.bb!.bytes().buffer,
          this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
          this.bb!.__vector_len(this.bb_pos + offset),
        )
      : null;
  }

  materials(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset
      ? this.bb!.readFloat32(
          this.bb!.__vector(this.bb_pos + offset) + index * 4,
        )
      : 0;
  }

  materialsLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  materialsArray(): Float32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset
      ? new Float32Array(
          this.bb!.bytes().buffer,
          this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
          this.bb!.__vector_len(this.bb_pos + offset),
        )
      : null;
  }

  matrices(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset
      ? this.bb!.readFloat32(
          this.bb!.__vector(this.bb_pos + offset) + index * 4,
        )
      : 0;
  }

  matricesLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  matricesArray(): Float32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 14);
    return offset
      ? new Float32Array(
          this.bb!.bytes().buffer,
          this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
          this.bb!.__vector_len(this.bb_pos + offset),
        )
      : null;
  }

  colors(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 16);
    return offset
      ? this.bb!.readFloat32(
          this.bb!.__vector(this.bb_pos + offset) + index * 4,
        )
      : 0;
  }

  colorsLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 16);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  colorsArray(): Float32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 16);
    return offset
      ? new Float32Array(
          this.bb!.bytes().buffer,
          this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
          this.bb!.__vector_len(this.bb_pos + offset),
        )
      : null;
  }

  itemsSize(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 18);
    return offset
      ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4)
      : 0;
  }

  itemsSizeLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 18);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  itemsSizeArray(): Uint32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 18);
    return offset
      ? new Uint32Array(
          this.bb!.bytes().buffer,
          this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
          this.bb!.__vector_len(this.bb_pos + offset),
        )
      : null;
  }

  ids(index: number): number | null {
    const offset = this.bb!.__offset(this.bb_pos, 20);
    return offset
      ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4)
      : 0;
  }

  idsLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 20);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  idsArray(): Uint32Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 20);
    return offset
      ? new Uint32Array(
          this.bb!.bytes().buffer,
          this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset),
          this.bb!.__vector_len(this.bb_pos + offset),
        )
      : null;
  }

  id(): string | null;
  id(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
  id(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 22);
    return offset
      ? this.bb!.__string(this.bb_pos + offset, optionalEncoding)
      : null;
  }

  capacity(): number {
    const offset = this.bb!.__offset(this.bb_pos, 24);
    return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
  }

  capacityOffset(): number {
    const offset = this.bb!.__offset(this.bb_pos, 26);
    return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
  }

  static startFragment(builder: flatbuffers.Builder) {
    builder.startObject(12);
  }

  static addPosition(
    builder: flatbuffers.Builder,
    positionOffset: flatbuffers.Offset,
  ) {
    builder.addFieldOffset(0, positionOffset, 0);
  }

  static createPositionVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array,
  ): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createPositionVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint8Array,
  ): flatbuffers.Offset;
  static createPositionVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array | Uint8Array,
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat32(data[i]!);
    }
    return builder.endVector();
  }

  static startPositionVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addNormal(
    builder: flatbuffers.Builder,
    normalOffset: flatbuffers.Offset,
  ) {
    builder.addFieldOffset(1, normalOffset, 0);
  }

  static createNormalVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array,
  ): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createNormalVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint8Array,
  ): flatbuffers.Offset;
  static createNormalVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array | Uint8Array,
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat32(data[i]!);
    }
    return builder.endVector();
  }

  static startNormalVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addIndex(
    builder: flatbuffers.Builder,
    indexOffset: flatbuffers.Offset,
  ) {
    builder.addFieldOffset(2, indexOffset, 0);
  }

  static createIndexVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint32Array,
  ): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createIndexVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint8Array,
  ): flatbuffers.Offset;
  static createIndexVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint32Array | Uint8Array,
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]!);
    }
    return builder.endVector();
  }

  static startIndexVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addGroups(
    builder: flatbuffers.Builder,
    groupsOffset: flatbuffers.Offset,
  ) {
    builder.addFieldOffset(3, groupsOffset, 0);
  }

  static createGroupsVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array,
  ): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createGroupsVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint8Array,
  ): flatbuffers.Offset;
  static createGroupsVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array | Uint8Array,
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat32(data[i]!);
    }
    return builder.endVector();
  }

  static startGroupsVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addMaterials(
    builder: flatbuffers.Builder,
    materialsOffset: flatbuffers.Offset,
  ) {
    builder.addFieldOffset(4, materialsOffset, 0);
  }

  static createMaterialsVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array,
  ): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createMaterialsVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint8Array,
  ): flatbuffers.Offset;
  static createMaterialsVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array | Uint8Array,
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat32(data[i]!);
    }
    return builder.endVector();
  }

  static startMaterialsVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addMatrices(
    builder: flatbuffers.Builder,
    matricesOffset: flatbuffers.Offset,
  ) {
    builder.addFieldOffset(5, matricesOffset, 0);
  }

  static createMatricesVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array,
  ): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createMatricesVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint8Array,
  ): flatbuffers.Offset;
  static createMatricesVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array | Uint8Array,
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat32(data[i]!);
    }
    return builder.endVector();
  }

  static startMatricesVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addColors(
    builder: flatbuffers.Builder,
    colorsOffset: flatbuffers.Offset,
  ) {
    builder.addFieldOffset(6, colorsOffset, 0);
  }

  static createColorsVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array,
  ): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createColorsVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint8Array,
  ): flatbuffers.Offset;
  static createColorsVector(
    builder: flatbuffers.Builder,
    data: number[] | Float32Array | Uint8Array,
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addFloat32(data[i]!);
    }
    return builder.endVector();
  }

  static startColorsVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addItemsSize(
    builder: flatbuffers.Builder,
    itemsSizeOffset: flatbuffers.Offset,
  ) {
    builder.addFieldOffset(7, itemsSizeOffset, 0);
  }

  static createItemsSizeVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint32Array,
  ): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createItemsSizeVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint8Array,
  ): flatbuffers.Offset;
  static createItemsSizeVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint32Array | Uint8Array,
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]!);
    }
    return builder.endVector();
  }

  static startItemsSizeVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addIds(builder: flatbuffers.Builder, idsOffset: flatbuffers.Offset) {
    builder.addFieldOffset(8, idsOffset, 0);
  }

  static createIdsVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint32Array,
  ): flatbuffers.Offset;
  /**
   * @deprecated This Uint8Array overload will be removed in the future.
   */
  static createIdsVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint8Array,
  ): flatbuffers.Offset;
  static createIdsVector(
    builder: flatbuffers.Builder,
    data: number[] | Uint32Array | Uint8Array,
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addInt32(data[i]!);
    }
    return builder.endVector();
  }

  static startIdsVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset) {
    builder.addFieldOffset(9, idOffset, 0);
  }

  static addCapacity(builder: flatbuffers.Builder, capacity: number) {
    builder.addFieldInt32(10, capacity, 0);
  }

  static addCapacityOffset(
    builder: flatbuffers.Builder,
    capacityOffset: number,
  ) {
    builder.addFieldInt32(11, capacityOffset, 0);
  }

  static endFragment(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createFragment(
    builder: flatbuffers.Builder,
    positionOffset: flatbuffers.Offset,
    normalOffset: flatbuffers.Offset,
    indexOffset: flatbuffers.Offset,
    groupsOffset: flatbuffers.Offset,
    materialsOffset: flatbuffers.Offset,
    matricesOffset: flatbuffers.Offset,
    colorsOffset: flatbuffers.Offset,
    itemsSizeOffset: flatbuffers.Offset,
    idsOffset: flatbuffers.Offset,
    idOffset: flatbuffers.Offset,
    capacity: number,
    capacityOffset: number,
  ): flatbuffers.Offset {
    Fragment.startFragment(builder);
    Fragment.addPosition(builder, positionOffset);
    Fragment.addNormal(builder, normalOffset);
    Fragment.addIndex(builder, indexOffset);
    Fragment.addGroups(builder, groupsOffset);
    Fragment.addMaterials(builder, materialsOffset);
    Fragment.addMatrices(builder, matricesOffset);
    Fragment.addColors(builder, colorsOffset);
    Fragment.addItemsSize(builder, itemsSizeOffset);
    Fragment.addIds(builder, idsOffset);
    Fragment.addId(builder, idOffset);
    Fragment.addCapacity(builder, capacity);
    Fragment.addCapacityOffset(builder, capacityOffset);
    return Fragment.endFragment(builder);
  }
}
