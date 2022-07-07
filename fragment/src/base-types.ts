import { BufferGeometry, Material, Matrix4, Object3D } from 'three';
import { BufferAttribute } from 'three/src/core/BufferAttribute';
import { InterleavedBufferAttribute } from 'three/src/core/InterleavedBufferAttribute';
import { FragmentMesh } from './fragment-mesh';

// The number array has the meaning: [start, end, start, end, start, end...]
export interface Indices {
  [materialID: number]: number[];
}

export interface VertexGroup {
  start: number;
  count: number;
  materialIndex?: number;
}

export interface IndicesMap {
  indexCache: Uint32Array;
  map: Map<number, Indices>;
}

export interface Items {
  ids?: number[];
  transform: Matrix4;
}

export interface ItemInstanceMap {
  [elementID: string]: number;
}

export interface FragmentGeometry extends BufferGeometry {
  attributes: {
    [name: string]: BufferAttribute | InterleavedBufferAttribute;
    blockID: BufferAttribute;
  };
  index: BufferAttribute;
}

export interface IFragmentMesh {
  material: Material[];
  geometry: FragmentGeometry;
  elementCount: number;
}

export interface IFragment {
  mesh: FragmentMesh;
  capacity: number;
  fragments: { [id: string]: IFragment };
  id: string;
}

export interface BaseSubsetConfig {
  scene?: Object3D;
  ids: number[];
  removePrevious: boolean;
  material?: Material;
  customID?: string;
  applyBVH?: boolean;
}

export interface SubsetConfig extends BaseSubsetConfig {
  fragment: IFragment;
}
