var too = [12, 13, 17, 90, 21, 65, 32];
//7d huvaagddag too olii

for (var i = 0; i < too.length; i++) {
  // 7d huvaagdahgui bol daraagiin elementiig shalga 'Continue'
  if (too[i] % 7 !== 0) continue;

  // herev 7d huvaagaad uldegdel ni 0 baival:
  console.log("too[i] :>> ", too[i]);
}
