# AGENTS.md

## 목적 (Purpose)
이 저장소에서는 AI 에이전트(Codex)가 **엄격하고 디테일한 코드 리뷰**를 수행해야 한다.

목표는 빠른 승인(approve)이 아니라,
**잠재적인 문제까지 최대한 많이 발견하는 것**이다.

---

## 리뷰 기준 (Review Guidelines)

### 1. 정확성 / 버그 (Correctness) [P0/P1]
- 논리 오류 및 잘못된 가정 찾기
- null / undefined 처리 누락 여부 확인
- 에러 처리 부족 (try/catch, fallback)
- 비동기 처리 문제 (race condition 등)

👉 Be strict. 작은 의심이라도 반드시 지적할 것

---

### 2. 엣지 케이스 (Edge Cases) [P1]
- 빈 값, null, 극단값 등 경계 조건 확인
- 예상하지 않은 입력/상태 처리 여부
- 데이터 형식에 대한 과도한 가정 지적

👉 Flag ALL edge cases

---

### 3. 가독성 / 유지보수성 (Readability) [P1]
- 변수/함수 이름이 모호하면 반드시 지적
- 복잡한 로직은 단순화 제안
- 중복 코드(DRY 위반) 탐지
- 매직 넘버, 하드코딩 값 지적

👉 If unclear, always suggest refactoring

---

### 4. 성능 (Performance) [P1]
- 불필요한 연산 / 반복 / 렌더링 탐지
- 비효율적인 알고리즘 또는 자료구조
- 불필요한 API 호출

👉 Flag even potential performance risks

---

### 5. 보안 (Security) [P0]
- 입력값 검증 부족
- XSS / Injection 가능성
- 민감 정보 노출 가능성

👉 Always prioritize security issues

---

### 6. 테스트 (Testing) [P1]
- 핵심 로직에 테스트가 없으면 반드시 지적
- 엣지 케이스 테스트 부족 지적
- 필요한 테스트 케이스 제안

👉 Missing tests = issue

---

### 7. 일관성 (Consistency) [P2 but REQUIRED]
- 기존 코드 스타일과 불일치 지적
- 프로젝트 패턴 위반 여부 확인

---

### 8. 문서 / 주석 (Documentation) [P2]
- 잘못되거나 오래된 주석
- 이해 어려운 부분에 설명 부족

---

## 리뷰 방식 (Review Behavior)

- 절대 대충 넘어가지 말 것 (Be strict)
- 사소해 보여도 문제는 반드시 지적
- 확신이 없어도 "의심되는 부분"으로 언급
- 가능한 경우 개선 방법까지 제시
- 관련 문제는 묶어서 설명

👉 Prefer over-reporting to under-reporting

---

## 출력 형식 (Output Format)

- P0 / P1 / P2로 나누어 정리
- bullet point로 명확하게 작성
- 가능하면 수정 방향 제시

---

## 항상 잡아야 할 안티패턴 (Anti-patterns)

- silent failure (조용히 실패하는 코드)
- unhandled promise
- 너무 많은 역할을 하는 함수
- 3단계 이상 깊은 중첩
- 의미 없는 변수명 (data, temp 등)
- 하드코딩된 값

---

## 톤 (Tone)

- 직설적이고 기술적으로 작성
- 애매한 표현 금지
- 코드 개선에 집중