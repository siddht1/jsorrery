
import { Color } from 'three';
import { AU, SIDERAL_DAY, NM_TO_KM } from 'constants';

export const earth = {
	title: 'The Earth',
	name: 'earth',
	mass: 5.9736e24,
	radius: 3443.9307 * NM_TO_KM,
	color: '#1F7CDA',
	map: './img/earthmap1k_clouds.jpg',
	material: {
		specular: new Color('grey'),
	},
	sideralDay: SIDERAL_DAY,
	tilt: 23 + (26 / 60) + (21 / 3600),
	orbit: {
		base: {
			a: 1.00000261 * AU,
			e: 0.01671123,
			i: -0.00001531,
			l: 100.46457166,
			lp: 102.93768193,
			o: 0.0,
		},
		cy: {
			a: 0.00000562 * AU,
			e: -0.00004392,
			i: -0.01294668,
			l: 35999.37244981,
			lp: 0.32327364,
			o: 0.0,
		},
	},
};
