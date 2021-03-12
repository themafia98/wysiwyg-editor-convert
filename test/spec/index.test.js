import { EditorState } from 'draft-js';
import convert from '../../src';

describe("Convert tests", () => {
    it("should convert without crash", () => {
        expect(convert(EditorState.createEmpty().getCurrentContent())).toBeTruthy();
    });
})