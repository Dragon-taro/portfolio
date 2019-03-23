// 取り急ぎほぼ衝突しないであろうランダム文字列を初期値に割り当ててる
export const randomStr = (len?: number): string =>
  len && len > 0 && len < 12
    ? Math.random()
        .toString(36)
        .slice(-len)
    : "";
